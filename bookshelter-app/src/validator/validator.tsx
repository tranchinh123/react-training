export interface ValidationErrors {
  name?: string;
  comment?: string;
}

export const validateForm = (
  name: string,
  comment: string
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!name) {
    errors.name = 'Name is required';
  }

  if (!comment) {
    errors.comment = 'Comment is required';
  }

  return errors;
};
