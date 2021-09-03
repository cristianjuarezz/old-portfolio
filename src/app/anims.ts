import { trigger, transition, animate, style, query, group } from '@angular/animations';

export const fader =
trigger('routeAnimations', [
	transition('1 => *', [
		style({height: '!'}),
		query(':enter', style({
			transform: 'scale(0.65)', opacity: 0/*, filter: 'blur(20px)'*/
		}), {optional: true}),
		query(':enter, :leave', style({
			position: 'absolute',
			inset: 0,
		}), {optional: true}),
		query(':leave', style({
			overflow: 'hidden',
		}), {optional: true}),
		group([
			query(':leave', [animate('0.8s ease', style({transform: 'scale(0.65)', opacity: 0/*, filter: 'blur(20px)'*/}))], {optional: true}),
			query(':enter', [animate('0.8s ease', style({transform: 'translateX(0) skew(0deg, 0deg)', opacity: 1/*, filter: 'blur(0px)'*/}))], {optional: true})
		])
	]),
	transition('* => 1', [
		style({height: '!'}),
		query(':enter', style({
			transform: 'scale(0.65)', opacity: 0/*, filter: 'blur(20px)'*/
		}), {optional: true}),
		query(':enter, :leave', style({
			position: 'absolute',
			inset: 0,
		}), {optional: true}),
		group([
			query(':leave', [animate('0.8s ease', style({transform: 'scale(0.65)', opacity: 0/*, filter: 'blur(20px)'*/}))], {optional: true}),
			query(':enter', [animate('0.8s ease', style({transform: 'scale(1)', opacity: 1/*, filter: 'blur(0px)'*/}))], {optional: true})
		])
	]),
	transition('* => *', [
		style({height: '!'}),
		query(':enter', style({
			transform: 'translateX(100%) skew(35deg, 35deg)', opacity: 0/*, filter: 'blur(20px)'*/
		}), {optional: true}),
		query(':enter, :leave', style({
			position: 'absolute',
			inset: 0,
			height: '100vh'
		}), {optional: true}),
		group([
			query(':leave', [animate('0.8s ease', style({transform: 'translateX(-100%) translateY(30%) skew(-35deg, -35deg)', opacity: 0/*, filter: 'blur(20px)'*/}))], {optional: true}),
			query(':enter', [animate('0.8s ease', style({transform: 'translateX(0) skew(0deg, 0deg)', opacity: 1/*, filter: 'blur(0px)'*/}))], {optional: true})
		])
	])
]);