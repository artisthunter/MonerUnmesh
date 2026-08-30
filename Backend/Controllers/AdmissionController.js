import admissionModel from "../Models/AdmissionModel.js";

const submit = async (req, res) => {
  try {
    const form = new admissionModel({
      studentName: req.body.studentName,
      aadhaarNo: req.body.aadhaarNo,
      dob: req.body.dob,

      fatherName: req.body.fatherName,
      fatherMobile: req.body.fatherMobile,
      fatherEmail: req.body.fatherEmail,
      fatherHomeAddress: req.body.fatherHomeAddress,
      fatherWorkAddress: req.body.fatherWorkAddress,
      fatherOccupation: req.body.fatherOccupation,
      fatherIncome: req.body.fatherIncome,

      motherName: req.body.motherName,
      motherMobile: req.body.motherMobile,
      motherEmail: req.body.motherEmail,
      motherHomeAddress: req.body.motherHomeAddress,
      motherWorkAddress: req.body.motherWorkAddress,
      motherOccupation: req.body.motherOccupation,
      motherIncome: req.body.motherIncome,

      height: req.body.height,
      weight: req.body.weight,
      bloodGroup: req.body.bloodGroup,
      allergicTo: req.body.allergicTo,
      majorHealthProblem: req.body.majorHealthProblem,
      chronicHealthProblem: req.body.chronicHealthProblem,
      identificationMarks: req.body.identificationMarks,
      familyHealthCondition: req.body.familyHealthCondition,

      previousAdmission: req.body.previousAdmission,
      previousAdmissionDetails: req.body.previousAdmissionDetails,
      pastSchoolName: req.body.pastSchoolName,
      admissionClass: req.body.admissionClass,
      yearOfAdmission: req.body.yearOfAdmission,
      yearOfLeaving: req.body.yearOfLeaving,
      reasonForLeaving: req.body.reasonForLeaving,

      reasonForChoosingSchool: req.body.reasonForChoosingSchool,
      specialActivity: req.body.specialActivity,
      specialBehavior: req.body.specialBehavior,

      guardianName: req.body.guardianName,
      declarationDate: req.body.declarationDate,
    });

    await form.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error submitting admission form" });
  }
};

export default submit;
