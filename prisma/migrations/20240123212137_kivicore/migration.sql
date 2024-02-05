-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "dni" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "dni" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "shiftStart" TIMESTAMP(3) NOT NULL,
    "shiftEnd" TIMESTAMP(3) NOT NULL,
    "numAppt" INTEGER NOT NULL,
    "numFreeAppt" INTEGER NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "medicoId" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL DEFAULT 'admin',
    "password" TEXT NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_username_key" ON "Paciente"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_dni_key" ON "Paciente"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_phone_key" ON "Paciente"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_email_key" ON "Paciente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_username_key" ON "Medico"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_dni_key" ON "Medico"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_email_key" ON "Medico"("email");

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
