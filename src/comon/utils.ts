import { HttpException } from '@nestjs/common';

export function GenerateException(error: any) {
  throw new HttpException(error.message, error.status);
}

export function validateObjectConditions(conditions: object) {
    Object.keys(conditions).forEach((key) => {
      if (conditions[key].validate) {
        throw new HttpException(
          conditions[key].message,
          conditions[key].status,
        );
      }
    });
  }