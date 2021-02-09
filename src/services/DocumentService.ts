import { Injectable } from "@tsed/di";
import { Document } from "../models/Document";

@Injectable()
export class DocumentService {
    public getDocumentById(documentId: number): Document {
        let document: Document = new Document(`text-by-document-id`)
        document.id = documentId;
        return document;
    }
    public getDocumentBySearch(searchText: string): Document {
        let document: Document = new Document(`text-searched`);
        return document;
    }
    public getDocuments(): Document[] {
        let documents: Document[] = new Array();
        for (let i = 0; i < 10; i++) {
            documents.push(new Document(`text-all-${i}`));
        }
        return documents;
    }
    public saveDocument(newDocument: Document): Document {
        let savedDocument: Document = new Document(`text-new`);
        savedDocument.flag = newDocument.flag;
        savedDocument.content = newDocument.content;
        return savedDocument;
    }
    public deleteDocument(documentId: number): boolean {
        // delete document logic;
        return true;
    }
}