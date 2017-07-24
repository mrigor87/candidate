package mrigor.dao.jdbc;

import mrigor.dao.CandidateDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by Igor on 19.07.2017.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class CandidateDaoImplTest {

    @Autowired
    CandidateDao candidateDao;

    @Test
    public void getAll() throws Exception {
        System.out.println(candidateDao.getAll());
    }

}