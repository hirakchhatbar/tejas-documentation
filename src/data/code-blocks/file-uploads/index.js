const quickStart = `import { Target, TejFileUploader } from 'te.js';

const upload = new TejFileUploader({
  destination: 'uploads/',
  maxFileSize: 5 * 1024 * 1024 // 5MB
});

const target = new Target('/files');

target.register('/upload', upload.file('avatar'), (ammo) => {
  ammo.fire({ file: ammo.payload.avatar });
});`

const configuration = `const upload = new TejFileUploader({
  destination: 'public/uploads',
  name: 'custom-name',
  maxFileSize: 10 * 1024 * 1024  // 10MB
});`

const singleFile = `target.register('/avatar', upload.file('avatar'), (ammo) => {
  const file = ammo.payload.avatar;
  
  ammo.fire({
    filename: file.filename,
    path: file.path.relative,
    mimetype: file.mimetype,
    size: file.size
  });
});`

const multipleFiles = `target.register('/documents', upload.files('photos', 'documents'), (ammo) => {
  const { photos, documents } = ammo.payload;
  
  ammo.fire({
    photos: photos || [],
    documents: documents || []
  });
});`

export { quickStart, configuration, singleFile, multipleFiles }
