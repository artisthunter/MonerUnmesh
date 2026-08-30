import collaborationModel from "../Models/CollaborationModel.js";

const submit = async (req, res) => {
  try {
    const form = new collaborationModel({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      address: req.body.address,
      contact: req.body.contact,
      profession: req.body.profession,
      educationalQualification: req.body.educationalQualification,
      socialServiceExp: req.body.socialServiceExp,
      scopeOfEngagement: req.body.scopeOfEngagement,
      othersDetails: req.body.othersDetails,
      reasonForService: req.body.reasonForService,
      involvementType: req.body.involvementType,
      institutionDetails: req.body.institutionDetails,
      institutionFile: req.body.institutionFile,
    });

    await form.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error submitting collaboration form",
    });
  }
};

export default submit;
