const AUTH_BASE = `/api/auth`;
// const USER_BASE = `/user`;
// const DONATION_BASE = `/donations`;
// const SETTINGS_BASE = `/settings`;

const withAuth = (path: string) => `${AUTH_BASE}${path}`;
// const withUser = (path: string) => `${USER_BASE}${path}`;
// const withDonations = (path = "") => `${DONATION_BASE}${path}`;
// const withSettings = (path = "") => `${SETTINGS_BASE}${path}`;

export const apiRoutes = {
  auth: {
    register: withAuth("/register"),
    login: withAuth("/login"),
    // logout: withAuth("/logout"),
    // refresh: withAuth("/refresh"),
    // forgotPassword: withAuth("/forgot-password"),
    // resetPassword: withAuth("/reset-password"),
    // google: withAuth("/google"),
    // facebook: withAuth("/facebook"),
    // callback: withAuth("/callback"),
  },

  //   user: {
  //     me: withUser("/me"),
  //     update: withUser("/update"),
  //     delete: withUser("/delete"),
  //   },

  //   donations: {
  //     all: withDonations(),
  //     create: withDonations("/create"),
  //     detail: (id: string) => withDonations(`/${id}`),
  //     update: (id: string) => withDonations(`/${id}/update`),
  //     delete: (id: string) => withDonations(`/${id}/delete`),
  //   },

  //   settings: {
  //     preferences: withSettings("/preferences"),
  //     notifications: withSettings("/notifications"),
  //   },
};
