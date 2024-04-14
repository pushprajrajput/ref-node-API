export const UserSchema = {
  components: {
    schemas: {
      // This User definition matches the structure of the User class
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Unique identifier for the user",
          },
          name: {
            type: "string",
            description: "Full name of the user",
          },
          email: {
            type: "string",
            description: "Email address of the user",
            format: "email",
          },
          phone: {
            type: "string",
            description: "Phone number of the user",
          },
        },
        required: ["id", "name", "email", "phone"], // Adjust required fields as needed
      },
    },
  },
};
