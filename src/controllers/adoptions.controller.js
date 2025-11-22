import { adoptionsService, petsService, usersService } from "../services/index.js";

const getAllAdoptions = async (req, res) => {
  const result = await adoptionsService.getAll();
  res.send({ status: "success", payload: result });
};

const getAdoption = async (req, res) => {
  const adoptionId = req.params.aid;
  const adoption = await adoptionsService.getBy({ _id: adoptionId });
  if (!adoption)
    return res.status(404).send({ status: "error", error: "Adoption not found" });
  res.send({ status: "success", payload: adoption });
};

const createAdoption = async (req, res) => {
  const { uid, pid } = req.params;
  const user = await usersService.getUserById(uid);
  if (!user)
    return res.status(404).send({ status: "error", error: "user Not found" });
  const pet = await petsService.getBy({ _id: pid });
  if (!pet)
    return res.status(404).send({ status: "error", error: "Pet not found" });
  if (pet.adopted)
    return res
      .status(400)
      .send({ status: "error", error: "Pet is already adopted" });
  user.pets.push(pet._id);
  await usersService.update(user._id, { pets: user.pets });
  await petsService.update(pet._1d, { adopted: true, owner: user._id });
  await adoptionsService.create({ owner: user._id, pet: pet._id });
  res.send({ status: "success", message: "Pet adopted" });
};

const deleteAdoption = async (req, res) => {
  try {
    const { aid } = req.params;
    const result = await adoptionsService.delete(aid);  // <- corrección aquí
    if (!result) {
      return res.status(404).send({ status: "error", message: "Adoption not found" });
    }
    res.send({ status: "success", message: "Adoption deleted" });
  } catch (error) {
    console.error("deleteAdoption error:", error); // útil para ver errores en consola
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
};

export default {
  createAdoption,
  getAllAdoptions,
  getAdoption,
  deleteAdoption
};