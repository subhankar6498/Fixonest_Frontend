export const endpoints = {
  auth: {
    registration: "customer-registration",
    login: "customer-login",
    profile: "auth/get-customer-profile",
    updatepw: "auth/profile/update-customer-password",
    forgetpwemail: "forgot-password",
    resetpw: "password-confirmation",
  },
  cms: {
    allservicecategories: "service/categories",
    allservices: "all-service",
    servicedetails: "service/details",
    categorywiseservices: "category-wise-services",
    booking: "auth/service-booking",
    viewbooking: "auth/get-booking-by-customer",
    contact: "customer/contact",
    testimonials: "testimonials",
  },
};

export const successNotifications = [
  endpoints.auth.registration,
  endpoints.auth.login,
  endpoints.cms.allservicecategories,
  endpoints.cms.allservices,
  endpoints.cms.categorywiseservices,
  endpoints.cms.booking,
  endpoints.cms.contact,
];
