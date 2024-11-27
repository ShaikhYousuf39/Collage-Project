// Load resume data
var resumeData = JSON.parse(localStorage.getItem("resumeData"));
// Populate preview fields
if (resumeData) {
    document.getElementById("previewName").textContent = resumeData.name;
    document.getElementById("previewEmail").textContent = resumeData.email;
    document.getElementById("previewPhone").textContent = resumeData.phone;
    document.getElementById("previewSummary").textContent = resumeData.summary;
    document.getElementById("previewEducation").textContent = resumeData.education;
    document.getElementById("previewExperience").textContent = resumeData.experience;
    document.getElementById("previewSkills").textContent = resumeData.skills;
    document.getElementById("previewProjects").textContent = resumeData.projects;
    document.getElementById("previewAchievements").textContent = resumeData.achievements;
    document.getElementById("previewCertifications").textContent = resumeData.certifications;
    document.getElementById("previewLanguages").textContent = resumeData.languages;
    document.getElementById("previewReferences").textContent = resumeData.references;
    var resumePhoto = document.getElementById("resumePhoto");
    if (resumeData.photo) {
        resumePhoto.src = resumeData.photo;
        resumePhoto.style.display = "block";
    }
}
