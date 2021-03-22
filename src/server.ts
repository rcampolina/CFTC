import express from 'express';
import DownloadArchive from './Controllers/DownloadArchive';

const app = express();

app.listen(3330, () => DownloadArchive());