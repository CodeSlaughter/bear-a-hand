/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as Landing} from './landing'
export {default as AboutUs} from './about-us'
export {default as Services} from './services'
export {default as Trainings} from './trainings'
export {default as PageNotFound} from './page-not-found'
export {default as Contact} from './contact'
export {Login, Signup} from './auth-form'
