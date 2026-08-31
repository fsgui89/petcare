"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  services,
  timeSlots,
} from "@/data/services";

import { useAppointments } from "@/hooks/useAppointments";

import styles from "@/styles/form.module.css";

export default function AppointmentForm() {
  const router = useRouter();

  const { createAppointment } =
    useAppointments();

  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tutor, setTutor] = useState("");
  const [pet, setPet] = useState("");
  const [phone, setPhone] = useState("");

  const today = new Date()
    .toISOString()
    .split("T")[0];

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    createAppointment({
      service,
      date,
      time,
      tutor,
      pet,
      phone,
    });

    router.push("/confirm");
  }

  return (
    <div
      id="agendar"
      className={styles.card}
    >
      <h2>Novo Agendamento</h2>

      <p className={styles.subtitle}>
        Preencha os dados para reservar um horário.
      </p>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.field}>
          <label>Serviço *</label>

          <select
            value={service}
            onChange={(event) =>
              setService(event.target.value)
            }
            required
          >
            <option value="">
              Selecione um serviço
            </option>

            {services.map((item) => (
              <option
                key={item.id}
                value={item.name}
              >
                {item.name} — {item.duration}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Data *</label>

            <input
              type="date"
              min={today}
              value={date}
              onChange={(event) =>
                setDate(event.target.value)
              }
              required
            />
          </div>

          <div className={styles.field}>
            <label>Horário *</label>

            <select
              value={time}
              onChange={(event) =>
                setTime(event.target.value)
              }
              required
            >
              <option value="">
                Selecione
              </option>

              {timeSlots.map((slot) => (
                <option key={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label>Nome do tutor *</label>

          <input
            type="text"
            placeholder="Seu nome completo"
            value={tutor}
            onChange={(event) =>
              setTutor(event.target.value)
            }
            required
          />
        </div>

        <div className={styles.field}>
          <label>Nome do pet *</label>

          <input
            type="text"
            placeholder="Nome do seu pet"
            value={pet}
            onChange={(event) =>
              setPet(event.target.value)
            }
            required
          />
        </div>

        <div className={styles.field}>
          <label>Telefone *</label>

          <input
            type="tel"
            placeholder="(11) 99999-9999"
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value)
            }
            required
          />
        </div>

        <button
          type="submit"
          className={styles.submit}
        >
          Confirmar agendamento
        </button>
      </form>
    </div>
  );
}