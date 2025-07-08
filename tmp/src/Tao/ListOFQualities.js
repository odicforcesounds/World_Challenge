import {HumanCare} from './qualitiesForHumanCare'
import {AnimalCare} from './GoodAnimalCare'
import {NatureCare} from './NatureCare'

export const combinedObject = {
  ...qualitiesForGoodCivilian,
  ...negativeQualitiesForGoodCivilian,
  ...qualitiesForGoodBusinessPerson,
  ...negativeQualitiesForGoodBusinessPerson,
  ...qualitiesForGoodStudent,
  ...negativeQualitiesForGoodStudent,
  ...qualitiesForGoodWorker,
  ...negativeQualitiesForGoodWorker,
  ...qualitiesForSecurityAttention,
  ...negativeQualitiesForSecurityAttention,
  ...qualitiesForFamilyRelationships,
  ...negativeQualitiesForFamilyRelationships,
  ...knowledgeForBasicSchool,
  ...qualitiesForLoveRelationship,
  ...negativeQualitiesForLoveRelationship,
  ...qualitiesForGardenCare,
  ...negativeQualitiesForGardenCare,
  ...qualitiesForAnimalCare,
  ...negativeQualitiesForAnimalCare,
  ...qualitiesForHumanCare,
  ...negativeQualitiesInHumanCare,
  ...qualitiesForUrgencyServices,
  ...negativeQualitiesInUrgencyServices,
  ...qualitiesForCommercialInteractions
};
