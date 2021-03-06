import { Body, Controller, Param, Put, ValidationPipe } from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDTO } from '../../dtos/create-product.dto';
import { UpdateProductService } from './update-product.service';

@Controller('products')
export class UpdateProductController {
  constructor(private updateProductService: UpdateProductService) {}

  @Put(':id')
  async handle(
    @Param('id') id: string,
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    data: CreateProductDTO,
  ): Promise<Product> {
    const updatedProduct = await this.updateProductService.execute({
      id,
      ...data,
    });

    return updatedProduct;
  }
}
