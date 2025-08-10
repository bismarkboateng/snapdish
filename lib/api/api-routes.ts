const AUTH_BASE = `/api/auth`;
const USER_BASE = `/api/users`;
const DONATION_BASE = `/api/donations`;
const REQUEST_BASE = `/api/requests`;
// const SETTINGS_BASE = `/settings`;

const withAuth = (path: string) => `${AUTH_BASE}${path}`;
const withUser = (path: string) => `${USER_BASE}${path}`;
const withDonations = (path = "") => `${DONATION_BASE}${path}`;
const withRequests = (path = "") => `${REQUEST_BASE}${path}`;
// const withSettings = (path = "") => `${SETTINGS_BASE}${path}`;

export const apiRoutes = {
  auth: {
    register: withAuth("/register"),
    login: withAuth("/login"),
    logout: withAuth("/logout"),
    // refresh: withAuth("/refresh"),
    forgotPassword: withAuth("/forgot-password"),
    resetPassword: withAuth("/reset-password"),
    // google: withAuth("/google"),
    // facebook: withAuth("/facebook"),
    // callback: withAuth("/callback"),
  },

    users: {
      // me: withUser("/me"),
      update: withUser("/update"),
      // delete: withUser("/delete"),
    },

    donations: {
      all: withDonations(),
      create: withDonations("/create"),
      request: withDonations("/request-donation"),
      my: withDonations("/my-donations"),
      myRequested: withDonations("/my-requests"),
      requestedUserDetails: (id: string) => withRequests(`/${id}`),
      approveRequest: withRequests("/approve"),
      declineRequest: withRequests("/decline"),
      // detail: (id: string) => withDonations(`/${id}`),
      // update: (id: string) => withDonations(`/${id}/update`),
      // delete: (id: string) => withDonations(`/${id}/delete`),
    },

  //   settings: {
  //     preferences: withSettings("/preferences"),
  //     notifications: withSettings("/notifications"),
  //   },
};
