import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview', {
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExpreience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdBy:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})