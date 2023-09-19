import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  search: Yup.string().min(3, 'Must be min 3 characters'),
});
