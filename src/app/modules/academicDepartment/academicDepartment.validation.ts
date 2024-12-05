import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Academic Department is required' }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be string',
      required_error: 'Faculty is required',
    }),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: 'Academic Department is required' })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Faculty must be string',
        required_error: 'Faculty is required',
      })
      .optional(),
  }),
});

export const departmentValidation = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
