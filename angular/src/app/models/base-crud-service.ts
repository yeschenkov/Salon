import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

export abstract class BaseCrudService<T> {
	protected abstract url;
	constructor(protected auth: AuthenticationService) { }

	public getAll(): Observable<Array<T>> {
		return <Observable<Array<T>>>this.auth.httpGet(this.url);
	}

	public create(object: T): Observable<T> {
		return <Observable<T>>this.auth.httpPost(this.url, object);
	}

	public update(object: T, objectId: string): Observable<T> {
		return <Observable<T>>this.auth.httpPut(this.url, objectId, object);
	}

	public delete(objectId: string): Observable<T> {
		return <Observable<T>>this.auth.httpDelete(this.url, objectId);
	}
}
