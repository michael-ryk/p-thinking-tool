interface KnowledgeItem {
  id: number;
  subject: string;
  answer: string;
  tags: string[];
  connections: number;
  date: string;
}

export default KnowledgeItem;