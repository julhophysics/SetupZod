import { type Request, type Response, type NextFunction } from "express";
import { z, AnyZodObject } from "zod";

export const dataSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Nome é obrigatório!",
    }),
    email: z
      .string({
        required_error: "E-mail é obrigatório!",
      })
      .email("E-mail inválido!"),
  }),
});

export const validate =
  (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };
