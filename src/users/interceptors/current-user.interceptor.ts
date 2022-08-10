// import {
//   NestInterceptor,
//   ExecutionContext,
//   CallHandler,
//   Injectable,
//   BadRequestException,
// } from '@nestjs/common';

// import { UsersService } from '../users.service';

// export class CurrentUserInterceptor implements NestInterceptor {
//   async intercept(context: ExecutionContext, next: CallHandler<any>) {
//     const request = context.switchToHttp().getRequest();
//     const accessToken = request.headers.authorization.split(' ')[1];
//     if (!accessToken) return new BadRequestException(`you're not logged in`);
//   }
// }
