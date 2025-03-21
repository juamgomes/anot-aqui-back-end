import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

export function ApiCreateEndpoint(options: {
  dto: any;
  responseType: any;
  summary?: string;
  tags?: string[];
}) {
  const {
    dto,
    responseType,
    summary = 'Create new resource',
    tags = ['resources']
  } = options;

  return applyDecorators(
    ApiTags(...tags),
    ApiOperation({ summary }),
    ApiBody({ type: dto }),
    ApiResponse({ 
      status: 201, 
      description: 'Resource successfully created', 
      type: responseType 
    }),
    ApiResponse({ status: 400, description: 'Bad request' }),
    ApiResponse({ status: 409, description: 'Resource already exists' })
  );
}