export class Car {
  id: number;

  brand: string;

  model: string;

  color: string;
}

export class CarResponse {
  status: number;
  error: boolean;
  data: CarResponse;
}
