'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, File, Loader2, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const DropZone = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    setError(null);
    if (fileRejections.length > 0) {
      const rejection = fileRejections[0];
      if (rejection.errors[0].code === 'file-invalid-type') {
        setError('Only PDF files are allowed');
      } else if (rejection.errors[0].code === 'file-too-large') {
        setError('File size must be less than 5MB');
      }
      return;
    }

    const pdfFile = acceptedFiles[0];
    setFile(pdfFile);
    // Here you would typically handle the file upload
    // handleUpload(pdfFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false
  });

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  return (
    <Card className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
      <CardContent className="p-6">
        <div
          {...getRootProps()}
          className={`flex flex-col items-center justify-center space-y-4 p-8 text-center cursor-pointer 
            ${isDragActive ? 'bg-gray-100 dark:bg-gray-800' : 'bg-transparent'}`}
        >
          <input {...getInputProps()} />
          <UploadCloud className="h-10 w-10 text-gray-400" />
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">
              {isDragActive ? 'Drop the PDF here' : 'Drag & drop your PDF here'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Only PDF files under 5MB are accepted
            </p>
          </div>
          
          <Button variant="outline">Select PDF</Button>
        </div>

        {error && (
          <div className="mt-4 flex items-center gap-2 text-sm text-red-500">
            <X className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        {file && (
          <div className="mt-4 flex items-center justify-between rounded-md border p-4">
            <div className="flex items-center gap-2">
              <File className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">{file.name}</span>
              <span className="text-xs text-gray-500">
                {(file.size / (1024 * 1024)).toFixed(2)}MB
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DropZone;