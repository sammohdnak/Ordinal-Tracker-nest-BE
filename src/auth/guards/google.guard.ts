import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
    async canActivate(context: ExecutionContext) {
        // console.log('Google authorizing...');
        const activate = (await super.canActivate(context)) as boolean;
        // console.log('activate', activate);
        return activate;
    }
}