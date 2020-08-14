import axios from 'axios';

describe('geneService', () => {
	test('obtener un documento cuyo nombre en geneInfo coincida con "araC"', async () => {
		const response = await axios.post('http://localhost:4000/graphql', {
			query: `
            query{
                getGenesBy(name:"araC"){
                  geneInfo{
                    name
                    id
                    strand
                    leftEndPosition
                    gcContent
                    synonyms
                  }
                  products{
                    regulatorId
                  }
                }
              }
            `
		});

		const { data } = response;
		expect(data).toMatchObject({
			data: {
				getGenesBy: [
					{
						geneInfo: {
							name: 'araC',
							id: 'RDBECOLIGN03690',
							strand: 'forward',
							leftEndPosition: 70387,
							gcContent: 52.56,
							synonyms: []
						},
						products: [
							{
								regulatorId: 'RDBECOLIRG00001'
							}
						]
					}
				]
			}
		});
	});
});
