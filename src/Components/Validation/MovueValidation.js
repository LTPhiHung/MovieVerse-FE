import * as yup from "yup";

// Review validation
const ReviewValidation = yup.object().shape({
    comment: yup
        .string()
        .required("Comment is required")
        .max(150, "Comment should be less than 150 characters"),
    rating: yup
        .string()
        .required("Select a rating")
});

export { ReviewValidation };