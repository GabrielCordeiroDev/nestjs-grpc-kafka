import { Product } from '@prisma/client';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { UpdateProductDTO } from '../dtos/update-product.dto';

export interface IProductsRepository {
  create(data: CreateProductDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  updateById(data: UpdateProductDTO): Promise<Product>;
  deleteById(id: string): Promise<void>;
}
