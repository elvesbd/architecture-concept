import Backend from "../util/Backend";
import Terminal from "../util/Terminal";

export default async function saveCourse() {
  Terminal.title("Salvar Curso");

  try {
    const name = await Terminal.requiredFields("Nome");
    const price = await Terminal.requiredFields("Preço");

    await Backend.post("courses", { name, price: +price });
    Terminal.success(`Course successfully save!`);
  } catch (error: any) {
    Terminal.error(error);
  } finally {
    await Terminal.waitEnter();
  }
}
