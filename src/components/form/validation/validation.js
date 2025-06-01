import * as yup from 'yup';
import { requiredText } from '../message';

export const FormValidationSchema = yup.object({
    firstname:yup.string().required(requiredText("First Name")),
    lastname:yup.string().required(requiredText("Last Name")),
    email:yup.string().required(requiredText("Email")),
})