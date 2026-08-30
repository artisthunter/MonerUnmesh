import queryModel from "../Models/QueryModel.js";

const submit = async (req, res) => {
  try {
    const form = new queryModel({
      name: req.body.name,
      contact: req.body.contact,
      address: req.body.address,
      involvementType: req.body.involvementType,
      institutionName: req.body.institutionName,
      query: req.body.query,
    });

    await form.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error submitting query form" });
  }
};

export default submit;
