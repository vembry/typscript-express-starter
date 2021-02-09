import { BodyParams, Controller, Delete, Get, HeaderParams, Inject, PathParams, Post, QueryParams } from "@tsed/common";
import { Returns } from "@tsed/schema";
import { Document } from "../models/Document";
import { DocumentService } from "../services/DocumentService";

@Controller("/document")
export class DocumentController {
  @Inject()
  documentService: DocumentService;

  @Get("/")
  @(Returns(200, Array).Of(Document).Description("get all documents"))
  getAll(@HeaderParams("x-token") token: string): Document[] {
    return this.documentService.getDocuments();
  }

  @Get("/q")
  @(Returns(200, Array).Of(Document).Description("search documents"))
  getBySearch(@HeaderParams("x-token") token: string, @QueryParams("content") searchText: string): Document[] {
    return this.documentService.getDocuments();
  }

  @Get("/:documentId")
  @(Returns(200, Document).Description("get single document"))
  get(@HeaderParams("x-token") token: string, @PathParams("documentId") documentId: number): Document {
    return this.documentService.getDocumentById(documentId);
  }

  @Post()
  @(Returns(200, Document).Description("submit a document"))
  submitDocument(@HeaderParams("x-token") token: string, @BodyParams() newDocument: Document): Document {
    return this.documentService.saveDocument(newDocument);
  }

  @Delete("/:documentId")
  @(Returns(200, Boolean).Description("delete a document"))
  deleteDocument(@HeaderParams("x-token") token: string, @PathParams("documentId") documentId: number): boolean {
    return this.documentService.deleteDocument(documentId);
  }
}
