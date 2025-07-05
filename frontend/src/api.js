/* ---------------------------------------------------------
   API helper – all requests funnel through here
   --------------------------------------------------------- */

/* Base URL:
   • In dev, falls back to http://localhost:5000
   • In production, Vite injects VITE_API_BASE_URL at build time
*/
const BASE =
  (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000').replace(/\/+$/, '');

/* Utility */
const json = (r) => r.json();

/* ---------- Designs ---------- */
export const getDesigns = () => fetch(`${BASE}/api/designs`).then(json);

export const createDesign = (design) =>
  fetch(`${BASE}/api/designs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(design),
  }).then(json);

export const updateDesign = (id, design) =>
  fetch(`${BASE}/api/designs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(design),
  }).then(json);

export const deleteDesign = (id) =>
  fetch(`${BASE}/api/designs/${id}`, { method: 'DELETE' }).then(json);

/* ---------- Orders ---------- */
export const createOrder = async (designId) => {
  const res = await fetch(`${BASE}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ designId }),
  });
  if (!res.ok) throw new Error('Order creation failed');
  return res.json();
};

export const getOrders    = () => fetch(`${BASE}/api/orders`).then(json);
export const cancelOrder  = (id) => fetch(`${BASE}/api/orders/${id}/cancel`, { method: 'PUT' }).then(json);
export const deleteOrder  = (id) => fetch(`${BASE}/api/orders/${id}`,         { method: 'DELETE' }).then(json);

/* ---------- Support ---------- */
export const createTicket = (ticket) =>
  fetch(`${BASE}/api/support`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  }).then(json);

export const getTickets      = () => fetch(`${BASE}/api/support`).then(json);
export const getSupportStats = () => fetch(`${BASE}/api/support/stats`).then(json);
export const deleteTicket    = (id) => fetch(`${BASE}/api/support/${id}`, { method: 'DELETE' }).then(json);

/* ---------- Favorites ---------- */
export const addFavorite    = (designId) =>
  fetch(`${BASE}/api/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ designId }),
  }).then(json);

export const getFavorites      = () => fetch(`${BASE}/api/favorites`).then(json);
export const deleteFavorite    = (favId) => fetch(`${BASE}/api/favorites/${favId}`, { method: 'DELETE' }).then(json);
export const getFavoritesStats = () => fetch(`${BASE}/api/favorites/stats`).then(json);



