import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { interactives } from "@prisma/client";

export class Interactive { }

export class InteractiveEntity implements interactives {


  @ApiProperty() id: number;
  @ApiProperty() title: string;
  @ApiProperty() description: string;
  @ApiProperty() duration: number;
  @ApiProperty() from_grade_id: number;
  @ApiProperty() to_grade_id: number;
  @ApiProperty() interactive_type_id: number;
  @ApiProperty() instructor_id: number;
  @ApiProperty() institute_id: number;
  @ApiPropertyOptional() isDraft: boolean;
  @ApiProperty() organization_id: number;
  is_duplicate: boolean;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  created_by: number;
  deleted_at: Date;
}

export class RegisterInteractive {
  @ApiProperty({
    example: 200,
  })
  status: number;
  @ApiProperty({
    example: "Registered Successfully",
  })
  message: string;
}

export class UpdateInteractive {
  @ApiProperty({
    example: 200,
  })
  status: number;
  @ApiProperty({
    example: "Update Successfully",
  })
  message: string;
}

export class DeleteInteractive {
  @ApiProperty({
    example: 200,
  })
  status: number;
  @ApiProperty({
    example: "Delete Successfully",
  })
  message: string;
}
