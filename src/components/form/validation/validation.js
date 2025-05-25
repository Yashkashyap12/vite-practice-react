import * as yup from 'yup';
import { requiredText } from '../message';

export const FormValidationSchema = yup.object({
    firstName:yup.string().required(requiredText("First Name")),
    lastName:yup.string().required(requiredText("Last Name")),
    email:yup.string().email("Email"),
})