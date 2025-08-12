const AUTH_BASE = `/api/auth`;
const USER_BASE = `/api/users`;
const DONATION_BASE = `/api/donations`;
const REQUEST_BASE = `/api/requests`;
const DASHBOARD_BASE = `/api/dashboard`;
const FORUM_BASE = `/api/forum`;

const withAuth = (path: string) => `${AUTH_BASE}${path}`;
const withUser = (path: string) => `${USER_BASE}${path}`;
const withDonations = (path = "") => `${DONATION_BASE}${path}`;
const withRequests = (path = "") => `${REQUEST_BASE}${path}`;
const withDashboard = (path = "") => `${DASHBOARD_BASE}${path}`;
const withForum = (path = "") => `${FORUM_BASE}${path}`;

export const apiRoutes = {
  auth: {
    register: withAuth("/register"),
    login: withAuth("/login"),
    logout: withAuth("/logout"),
    forgotPassword: withAuth("/forgot-password"),
    resetPassword: withAuth("/reset-password"),
  },

  users: {
    update: withUser("/update"),
    current: withUser("/current"),
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
  },
  dashboard: {
    cardsSummary: withDashboard("/cards-summary"),
  },

  forum: {
    createReview: withForum(`/create`),
    getReviews: (id: string) => withForum(`/${id}/reviews`),
  },
};
