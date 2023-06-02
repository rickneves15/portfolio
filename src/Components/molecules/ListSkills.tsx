import { Chip } from '../atoms/Chip'

type ListSkillsProps = {
  skills: string[]
}

export function ListSkills({ skills }: ListSkillsProps) {
  return (
    <div className="flex flex-col gap-x-6">
      <span className="mb-6 text-2xl font-bold">
        Tools and technologies that I use
      </span>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <Chip key={skill} text={skill} />
        ))}
      </ul>
    </div>
  )
}
