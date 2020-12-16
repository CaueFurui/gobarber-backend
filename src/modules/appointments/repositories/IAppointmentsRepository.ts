import Appointment from '../infra/typeorm/entities/Appointment';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthProviderDTO';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentsDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProviderDTO,
  ): Promise<Appointment[]>;
}
