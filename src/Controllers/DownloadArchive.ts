import api from '../services/api';
import fs from 'fs';
import path from 'path'

export default function DownloadArchive() {
  console.log('download');

  

  api.get('https://www.cftc.gov/files/dea/history/com_fin_xls_2021.zip').then(data => console.log(data));

}