export interface Camera {
	idCamera: number;
	idCaptureSource: number;
	name: string;
	description: string;
	lat: number|string;
	lon: number|string;
	archived: boolean;
	// computed in backend
	lastRegisteredCapture: string;
	// geoFrom: string;
	// online: boolean;
}
