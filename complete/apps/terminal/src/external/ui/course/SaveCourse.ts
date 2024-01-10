import Terminal from "../util/Terminal";
import CoreFacade from "../../adapters/facade/CoreFacade";

export default async function saveCourse() {
  Terminal.title("Salvar Curso");

  try {
    const name = await Terminal.requiredFields("Nome");
    const price = await Terminal.requiredFields("Preço");

    await CoreFacade.course.save({ name, price: +price });
    Terminal.success(`Course successfully save!`);
  } catch (error: any) {
    Terminal.error(error);
  } finally {
    await Terminal.waitEnter();
  }
}
