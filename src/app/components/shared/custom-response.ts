export interface CustomResponse<T> {
	result: T;
	status: string | number;
	error?: {
		message: any,
		descripcion: any
	};
}
