export interface CartItem {
  id: string;
  title: string;
  titleEs: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export type CartItemInput = Omit<CartItem, 'quantity'>;

const STORAGE_KEY = 'takumi-omakase-cart-v1';
let snapshot: CartItem[] | undefined;
const subscribers = new Set<(items: CartItem[]) => void>();

function readCart(): CartItem[] {
  if (snapshot) return snapshot;
  if (typeof window === 'undefined') return [];

  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown;
    snapshot = Array.isArray(saved)
      ? saved.filter((item): item is CartItem => !!item && typeof item.id === 'string' && typeof item.title === 'string' && Number.isFinite(item.price) && Number.isInteger(item.quantity) && item.quantity > 0 && typeof item.thumbnail === 'string')
      : [];
  } catch {
    snapshot = [];
  }
  return snapshot;
}

function publish(): void {
  const items = readCart();
  if (typeof window !== 'undefined') {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch { /* Storage may be unavailable in private contexts. */ }
    window.dispatchEvent(new CustomEvent('takumi:cart-updated', { detail: items }));
  }
  subscribers.forEach((subscriber) => subscriber(items.map((item) => ({ ...item }))));
}

export function getCart(): CartItem[] {
  return readCart().map((item) => ({ ...item }));
}

export function subscribeCart(subscriber: (items: CartItem[]) => void): () => void {
  subscribers.add(subscriber);
  subscriber(getCart());
  return () => subscribers.delete(subscriber);
}

export function addToCart(input: CartItemInput): void {
  const items = readCart();
  const existing = items.find((item) => item.id === input.id);
  if (existing) {
    existing.quantity += 1;
    existing.title = input.title;
    existing.titleEs = input.titleEs;
    existing.price = input.price;
    existing.thumbnail = input.thumbnail;
  } else {
    items.push({ ...input, quantity: 1 });
  }
  publish();
}

export function setCartQuantity(id: string, quantity: number): void {
  const items = readCart();
  const item = items.find((entry) => entry.id === id);
  if (!item) return;
  if (quantity <= 0) {
    snapshot = items.filter((entry) => entry.id !== id);
  } else {
    item.quantity = Math.floor(quantity);
  }
  publish();
}

export function removeFromCart(id: string): void {
  snapshot = readCart().filter((item) => item.id !== id);
  publish();
}

export function cartSubtotal(items = readCart()): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function formatMXN(amount: number): string {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(amount);
}
