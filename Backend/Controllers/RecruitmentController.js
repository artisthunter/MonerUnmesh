import recruitmentModel from "../Models/RecruitmentModel.js";

const submit = async (req, res) => {
  const url = "https://monerunmesh.vercel.app/";

  try {
    const form = new recruitmentModel({
      name: req.body.name,
      fatherName: req.body.fatherName,
      presentAddress: req.body.presentAddress,
      permanentAddress: req.body.permanentAddress,
      age: req.body.age,
      sex: req.body.sex,
      dobDay: req.body.dobDay,
      dobMonth: req.body.dobMonth,
      dobYear: req.body.dobYear,
      qualification: req.body.qualification,
      reference: req.body.reference,
      otherActivities: req.body.otherActivities,
      fullNameCapital: req.body.fullNameCapital,
      declarationDate: req.body.declarationDate,

      addressProof: req.body.addressProof,
      ageProof: req.body.ageProof,
      madhyamikCert: req.body.madhyamikCert,
      higherSecondaryCert: req.body.higherSecondaryCert,
      degreeCert: req.body.degreeCert,
      masterDegreeCert: req.body.masterDegreeCert,
      otherQualificationCert: req.body.otherQualificationCert,
      casteCertificate: req.body.casteCertificate,
      referenceCertificate: req.body.referenceCertificate,
    });

    await form.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error submitting recruitment form" });
  }
};

export { submit };
