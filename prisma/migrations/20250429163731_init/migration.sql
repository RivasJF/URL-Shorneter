-- CreateTable
CREATE TABLE "URLs" (
    "id" SERIAL NOT NULL,
    "url_full" TEXT NOT NULL,
    "url_short" TEXT NOT NULL,
    "Create_to" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Use" INTEGER NOT NULL,

    CONSTRAINT "URLs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "URLs_url_full_key" ON "URLs"("url_full");

-- CreateIndex
CREATE UNIQUE INDEX "URLs_url_short_key" ON "URLs"("url_short");
