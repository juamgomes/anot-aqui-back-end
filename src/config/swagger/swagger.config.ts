import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeName } from 'swagger-themes';

export class Swagger {
  setup(app) {
    const defaultThemeSwagger = process.env.SWAGGER_THEME || 'dark';
    const theme = new SwaggerTheme();

    const config = new DocumentBuilder()
      .setTitle('api-anot-aqui')
      .setDescription('The api-anot-aqui API description')
      .setVersion('3.0')
      .addTag('api-anot-aqui')
      .build();

    const optionsTheme = {
      explorer: true,
      customCss: theme.getBuffer(defaultThemeSwagger as SwaggerThemeName),
    };

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, optionsTheme);
  }
}
